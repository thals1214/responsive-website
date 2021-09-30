import React from 'react'
import styled, { css } from 'styled-components'

const sizes = {
  desktop: 1024,
  tablet: 768,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `
  return acc
}, {})

const About = styled.div`
  text-align: center;
  position: relative;
`
const Banner = styled.img`
  height: 70vh;
  width: 75%;
  margin-top: 10vh;
  @media (max-width: 768px) {
    width: 100%;
    height: 60vh;
  }
`
const Image = styled.img`
  height: 40vh;
  width: 30%;
  @media (max-width: 768px) {
    display: none;
  }
`
const Title = styled.h1`
  align-items: center;
  position: absolute;
  width: 60%;
  text-align: left;
  bottom: 0.5rem;
  left: 12%;
  font-weight: 300;
  margin-left: 30px;
  color: whitesmoke;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    text-align: center;
    bottom: 15rem;
  }
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5rem;
`
const Col = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 3rem;
  margin-right: 3rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`
const Contents = () => {
  return (
    <div>
      <About>
        <Banner src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
        <Title>반응형 웹 사이트 만들기 실습</Title>
      </About>
      <Col>
        <h1 style={{ marginTop: '32px' }}>Contents</h1>
        <Row>
          <Image
            style={{ marginLeft: '3rem' }}
            src="https://cdn.statically.io/img/data.whicdn.com/images/339245231/original.jpg"
          ></Image>
          <Text>
            <h3>Responsive web design basics</h3>
            <p>
              The use of mobile devices to surf the web continues to grow at an
              astronomical pace, and these devices are often constrained by
              display size and require a different approach to how content is
              laid out on the screen.
            </p>
          </Text>
        </Row>
      </Col>
    </div>
  )
}

export default Contents
