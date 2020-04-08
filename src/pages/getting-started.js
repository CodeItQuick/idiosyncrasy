import React, { Component } from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #aaa;
  align-content: center;
  margin: auto;
`;

const Section = styled.div`
  display: flex;
  min-height: 150px;
  justify-content: flex-start;
  align-item: center;
  @media (min-width: 600px) {
    max-width: 300px;
  }
`;
const RightAlignSection = styled(Section)`
  justify-content: flex-end;
`;
const BigNumber = styled.div`
  font-size: 60px;
  align-items: center;
  justify-content: flex-start;
  width: 50px;
`;
const Description = styled(ComponentWrapper)`
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 200px;
`;
const SectionTitle = styled.h4`
  margin: 0;
  font-weight: 700;
`;
const SectionParagraph = styled.p`
  margin: 0;
  font-size: 12px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Getting Started" />

    <h3>Getting Started</h3>

    <MainContainer>

        <Section>
            <BigNumber>1</BigNumber>
            <Description>
                <SectionTitle>Sign up and log in.</SectionTitle> 
                <SectionParagraph>It takes 30 seconds</SectionParagraph>
            </Description>
        </Section>

        <RightAlignSection >
            <BigNumber>2</BigNumber>
            <Description>
                <SectionTitle>Configure some settings. </SectionTitle> 
                <SectionParagraph>Add some Alerts. Connect up some lights.</SectionParagraph>
            </Description>
        </RightAlignSection> 

        <Section>
            <BigNumber>3</BigNumber>
            <Description>
                <SectionTitle>Profit!</SectionTitle> 
                <SectionParagraph>The Sky is the limit.</SectionParagraph>
            </Description>
        </Section>

    </MainContainer>
  </Layout>
)

export default IndexPage
