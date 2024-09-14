import { styled } from '@linaria/react'

export const Wrapper = styled.div`
  display: flex;
  width: 150%;
  height: 95vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    223.36deg,
    #ff0d65 10.57%,
    #9562a5 40.6%,
    #45a2d5 65.93%,
    #13cbf3 83.76%,
    #00daff 92.2%
  );
`

export const Container = styled.div`
  display: flex;
  min-width: 380px;
  flex-direction: column;
  align-items: center;
  padding: 46px 24px;
  border-radius: 24px;
  background-color: white;
  box-shadow: 0 12px 48px rgb(38 54 75 / 48%);
  gap: 36px;
`

export const Form = styled.form`
  display: grid;
  width: 100%;
  gap: 16px;
`
