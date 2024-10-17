import styled from 'styled-components';
import { mobile } from '../../utilities/responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin-top: 10px;
  padding: 0px 135px;
  height: 60px;
  background-color: var(--orange);
  font-weight: 500;
  font-size: 16px;
  ${mobile({ height: '40px', fontSize: '12px' })}
`;

const MenuList = styled.ul`
  font-size: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  ${mobile({ fontSize: '10px', padding: '0 20px' })}
`;
const MenuItem = styled.li`
  text-align: center;
  display: flex;
  align-items: center;
  /* margin-right: 50px; */
  height: 100%;
  padding: 0 20px;
  ${mobile({ marginRight: '20px' })}

  &:hover {
    cursor: pointer;
    // color: var(--orange);
    background-color: rgb(255,211,145);
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: white;
`

const Menu = () => {
  return (
    <Container>
      <MenuList>
        {/* <MenuItem>
          <Link
            style={{ color: '#fff', textDecoration: 'none' }}
            to={`/shop/birthday`}
          >
            Birthda
          </Link>
        </MenuItem> */}
        <MenuItem>
          <LinkItem
            to={`/shop/love`}
          >
            Mosaic Pictures
          </LinkItem>
        </MenuItem>
        <MenuItem>
          <LinkItem
            to={`/shop/graduation`}
          >
            Mosaics
          </LinkItem>
        </MenuItem>
        {/* <MenuItem>
          <Link
            style={{ color: '#fff', textDecoration: 'none' }}
            to={`/shop/baby`}
          >
            New Baby
          </Link>
        </MenuItem> */}
        <MenuItem>
          <LinkItem
            to={`/shop/thanks`}
          >
            Lót ly
          </LinkItem>
        </MenuItem>
      </MenuList>
    </Container>
  );
};

export default Menu;
