import React, { Fragment } from "react";
import Link from "next/link";

import {
	Wrapper,
	WrapperImageMenu,
	LogoImage,
	Text,
	Span,
	ListItems,
	Item,
	Anchor,
	MenuButton
} from "./styles";
import Auth from '../../lib/Auth';
const auth = new Auth();
const Imagepng = "../images/logo.png";

export default class Nav extends React.Component {
	handleLogin() {
		auth.login();
	}

	render() {
		return (
			<Fragment>
				<Wrapper>
					<WrapperImageMenu>
						<Text>MENU</Text>
						<LogoImage src={Imagepng} />
					</WrapperImageMenu>
					<ListItems>
						<Item>
						<MenuButton onClick={()=>this.handleLogin()}>
									Iniciar <Span>Sesión</Span>
						</MenuButton>
						</Item>
						<Item>
							<Link href="/">
								<Anchor>
									<Span>P</Span>erfil
								</Anchor>
							</Link>
						</Item>
						<Item>
							<Link href="/about">
								<Anchor>
									Nosot<Span>ros</Span>
								</Anchor>
							</Link>
						</Item>
					</ListItems>
				</Wrapper>
			</Fragment>
		);
	}
}
