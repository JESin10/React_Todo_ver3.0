import React from 'react'
import styled, {css} from 'styled-components';

const Button = (props) => {
  return (
    <StBtn {...props} disable = {props.disable} > 
    {props.children}
    </StBtn>
  );
};

export default Button

const StBtn = styled.button`
  border-radius: 10px;
  cursor : pointer;
  font-weight: bold;

  ${({size}) => {
    switch( size ) {
      case 'large':
        return css`
          margin : auto;
          padding : 20px;
          width : 50rem;
          height : 9rem;
          font-size : 4rem;
          border-color: #dddddd;
          border-radius : 20px;
          background-color : #dddddd;
          text-align : center;
        `;
      case 'medium' :
        return css`
          width : 8rem;
          height: 40px;
          margin: 0 30px 20px 30px;
          color:  #009227;
          font-size : 20px;
          border: none;  
        `;
      case 'small_ver1' :
        return css`
          width : 80px;
          margin: 5px 0px;
          height: 30px;
          color:  #990000;
          font-size : 15px;
          border: none;
        `;
        case 'small_ver2' :
        return css`
          width : 200px;
          height: 45px;
          display : inline-block;
          margin : auto;
          background-color: #dddddd;
          border: none;
          color: gray;
          font-size: 20px;
        `;
        case 'small_ver3' :
        return css`
          font-size : 20px;
          border : none;
          background-color : #f5f5f5;
          color : gray;
        `;
        case 'x_small' :
        return css`
          outline: none;
          border: none;
          font-size: 20px;
          background-color : #e1e1e1;
        `;                 
      default:
        return css`
          width : 120px;
        `
    }
  }};
`;

