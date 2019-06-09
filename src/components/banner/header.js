// import withStyles from '@material-ui/core/styles/withStyles';
// import AppBar from '@material-ui/core/AppBar';
import { Link } from "react-router-dom";
import React from "react";
import Img from "react-image";
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
import styled from "styled-components";
import Flex from "styled-flex-component";
import { media } from "../media_style";

//css file
// import headerStyle from './headerStyle';

class Header extends React.Component {
  // constructor(props) {
  // 	super(props);
  // 	this.headerColorChange = this.headerColorChange.bind(this);
  // }

  // componentDidMount() {
  // 	if (this.props.changeColorOnScroll) {
  // 		window.addEventListener('scroll', this.headerColorChange);
  // 	}
  // }

  // headerColorChange() {
  // 	const { classes, color, changeColorOnScroll } = this.props;
  // 	const windowsScrollTop = window.pageYOffset;
  // 	if (windowsScrollTop > changeColorOnScroll.height) {
  // 		document.body.getElementsByTagName('header')[0].classList.remove(classes[color]);
  // 		document.body.getElementsByTagName('header')[0].classList.add(classes[changeColorOnScroll.color]);
  // 	} else {
  // 		document.body.getElementsByTagName('header')[0].classList.add(classes[color]);
  // 		document.body.getElementsByTagName('header')[0].classList.remove(classes[changeColorOnScroll.color]);
  // 	}
  // }
  // componentWillUnmount() {
  // 	if (this.props.changeColorOnScroll) {
  // 		window.removeEventListener('scroll', this.headerColorChange);
  // 	}
  // }

  render() {
    // const { classes, color, fixed, absolute } = this.props;
    // const appBarClasses = classNames({
    // 	[classes.appBar]: true,
    // 	[classes[color]]: color,
    // 	[classes.absolute]: absolute,
    // 	[classes.fixed]: fixed,
    // });

    const Div = styled.div`
      height: 9vh
      background : #444444
      padding-top: 1%;
    `;
    const A = styled.a`
      ${media.tablet`
			font-size: 1.3em
		`}
      ${media.phone`
			font-size: 1em
		`}
			color: #0E2F5A;
      text-decoration: none;
      font-size: 20px;
      height: 10%;
    `;

    const Image = styled(Img)`
      width: 7%;
      height: 25px;
    `;

    const Button = styled.button`
      background: #0e2f5a;
      text-align: right;
      border-radius: 7px;
      height: 30px;
      border: 1px solid #0e2f5a;
      color: #fff;
      margin: 0 1em;
      padding: 0.25em 1em;
      font-size: 1em;
      &:hover {
        color: #0e2f5a;
        background: #fff;
      }
    `;

    const NameDiv = styled.div`
      margin-left: 4%;
    `;

    return (
      <Div>
        <nav>
          <Flex justifyBetween>
            <NameDiv>
              <Flex>
                <Image
                  src={
                    "https://res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                  }
                />
                <Link prefetch href="/">
                  <A>EvoHub</A>
                </Link>
              </Flex>
            </NameDiv>

            <Flex>
              <A href="/">EvoHub</A>
              <Button> Apply </Button>
            </Flex>
          </Flex>
        </nav>
      </Div>
    );
  }
}

// Header.defaultProp = {
// 	color: 'white',
// };

// Header.propTypes = {
// 	classes: PropTypes.object.isRequired,
// 	color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'transparent', 'white', 'rose', 'dark']),
// 	rightLinks: PropTypes.node,
// 	leftLinks: PropTypes.node,
// 	brand: PropTypes.string,
// 	fixed: PropTypes.bool,
// 	absolute: PropTypes.bool,
// 	// this will cause the sidebar to change the color from
// 	// this.props.color (see above) to changeColorOnScroll.color
// 	// when the window.pageYOffset is heigher or equal to
// 	// changeColorOnScroll.height and then when it is smaller than
// 	// changeColorOnScroll.height change it back to
// 	// this.props.color (see above)
// 	changeColorOnScroll: PropTypes.shape({
// 		height: PropTypes.number.isRequired,
// 		color: PropTypes.oneOf([
// 			'primary',
// 			'info',
// 			'success',
// 			'warning',
// 			'danger',
// 			'transparent',
// 			'white',
// 			'rose',
// 			'dark',
// 		]).isRequired,
// 	}),
// };

// export default withStyles(headerStyle)(Header);
export default Header;
