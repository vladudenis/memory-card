import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';
import styled from "styled-components"

const LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker({area: props.area});
  
    return (
      promiseInProgress &&
      <SpinnerWrapper>
        <Loader type="TailSpin" color="black" height="100" width="100" />
      </SpinnerWrapper>
    );
  }
  
  const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100;
    margin-bottom: 300px;
  `;

  export default LoadingIndicator;