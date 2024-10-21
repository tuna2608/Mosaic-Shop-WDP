const router = require("express").Router();
const Payos = require("@payos/node");

const payos = new Payos(
    process.env.CLIENT_ID,
    process.env.API_KEY,
    process.env.CHECK_SUM
);

router.post("/payment", async (req, res) => {
    console.log("start payment-pay-os");
    console.log(req.body);
    const order = {
        amount: 10000,
        description: "Thanh toan tien",
        orderCode: Number(String(Date.now()).slice(-6)),
        returnUrl: `${process.env.REACT_URL}/success`,
        cancelUrl: `${process.env.REACT_URL}/cancel`,
    }

    try {
        const paymentLinkResponse = await payos.createPaymentLink(order);
        console.log(paymentLinkResponse.checkoutUrl);
        // res.status(200).json({url: paymentLinkResponse.checkoutUrl});
        window.open(paymentLinkResponse.checkoutUrl, '_blank');
        // res.status(200).redirect(paymentLinkResponse.checkoutUrl);
    } catch (error) {
        console.error(error);
        res.send('Something went error');
    }
    // const paymentLinkResponse = await payos.createPaymentLink(order);
    // // res.redirect(303,paymentLinkResponse.checkoutUrl);
    // res.status(200).json({url: paymentLinkResponse.checkoutUrl});
    // res.redirect(303,paymentLinkResponse.checkoutUrl);
    // res.redirect(303, paymentLink.checkoutUrl);
})

module.exports = router;