import React from 'react';
import Link from "next/link";
import {
	WrapperInput,
	LabelText,
	LabelImg,
	email,
	LabelInput,
	LabelTextPass,
	LabelImgPass,
	LabelInputPass,
	pass,
	BaseButton,
	WrapperSingRD,
	FBLogo,
	FbLogo,
	FBButton,
	GoLogo,
	GLogo,
	GooButton,
} from "../AccessRight/styles";
import FormComponent from '../FormComponent/index';


const SignInForm = () => {
    return (
        <FormComponent>
            <WrapperInput>
                <LabelText>Email <LabelImg src={email} /></LabelText>
                <LabelInput></LabelInput>
            </WrapperInput>
            <WrapperInput>
                <LabelTextPass>Contraseña <LabelImgPass src={pass} /></LabelTextPass>
                <LabelInputPass></LabelInputPass>
            </WrapperInput>
            <Link href="/">
                <BaseButton>Entrar</BaseButton>
            </Link>            
            <WrapperSingRD>
                <FBButton>
                    Entrar con 
                    <FbLogo src={FBLogo}></FbLogo>
                </FBButton>
                <GooButton>
                    Entrar con 
                    <GLogo src={GoLogo}></GLogo>
                </GooButton>
            </WrapperSingRD>
        </FormComponent>       
    )
}
export default SignInForm;
