const router = require("express").Router();
const Payos = require("@payos/node");

const payos = new Payos(
    process.env.CLIENT_ID,
    process.env.API_KEY,
    process.env.CHECK_SUM
);

router.post("/payment", async (req, res) => {
    // console.log("start payment-pay-os");
    // console.log(req.body);
    const amountTotal = req.body.amount;
    // console.log(amountTotal);
    const order = {
        amount: 10000,
        description: "Thanh toan tien",
        orderCode: Number(String(Date.now()).slice(-6)),
        returnUrl: `${process.env.REACT_URL}/success?&amount=${amountTotal}`,
        cancelUrl: `${process.env.REACT_URL}/cart`,
    }
    try {
        const paymentLinkResponse = await payos.createPaymentLink(order);
        // console.log(paymentLinkResponse.checkoutUrl);
        res.status(200).json({url: paymentLinkResponse.checkoutUrl});
    } catch (error) {
        console.error(error);
        res.json({error: error})
    }
})

module.exports = router;