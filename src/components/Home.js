import {useState} from 'react';
import { Layout, Menu, Breadcrumb , Row, Col, Input} from 'antd';
import Logo from '../images/url-preview-logo.png';
import BannerImage from '../images/BannerImage.png';
import './home.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import useFetch from '../hooks/useFetch';


const { Header, Content, Footer } = Layout;

export default function Home() {
  const [inputData, setInputData] = useState("");
  const [currentText, setCurrentText] = useState("Copy");

  const parsedData = useFetch({input: inputData});

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  }

  const handleCopyText = () => {
    setCurrentText("Copied");
    setTimeout(() => {
      setCurrentText("Copy");
    }, 3000);
  }

    return (
        <Layout className="layout">
    <Header style={{background: "#FFF"}}>
     
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">
      <div className="logo" > 
      <img src={Logo} style={{height: "50px", width: "180px"}} />
      </div>
      </Menu.Item>
        {/* <Menu.Item key="2">Url Previewer</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item key="4">nav 4</Menu.Item>
        */}
      </Menu> 
    </Header>
    <Content style={{ padding: '0 50px', backgroundColor: "#FFF" }}>
     
      <div className="site-layout-content">
      <Row gutter={24} style={{marginTop: "20px"}}>
        <Col xs={0} sm={2} md={2}></Col>
        <Col xs={24} sm={24} md={10} style={{textAlign: "start"}}>
          <h1 className="banner-text">Add Previews to URL with ease in your code</h1>
          <h3>Get basic website information from any given URL, in JSON format, for Free!</h3>
        </Col>

        <Col xs={24} sm={24} md={12}>
        <img src={BannerImage} style={{width: "100%", height: "auto"}} />
        </Col>
      </Row>

      <Row className="top-margin-sm">
        <Col xs={24} md={24} className="top-margin-sm" >
        <h1 className="sub-heading" style={{marginBottom: "0px"}}>Basic Example</h1>
        </Col>
      </Row>

      <Row className="">
        <Col xs={0} md={2} xl={4}></Col>
        <Col xs={24} md={20} xl={16}>
          <Row>
      <Col xs={24} sm={24} md={24}>
        <h3 className="bottom-margin-sm align-left">API Request</h3>
      <div className="code-background">
      http://api.url-previewer.com/?q=https://www.google.com
      </div>
      </Col>

      <Col xs={24} sm={24} md={24} className="top-margin-sm">
      <h3 className="top-margin-sm bottom-margin-sm align-left">API Response</h3>
      <div className="code-background">
      <div>{'{'} </div>
<div>"title":"Google", </div>
<div>"description":"Search webpages, images, videos and more.",</div>
<div>"image":"https:\/\/www.google.com\/images\/logo.png",</div>
<div>"url":"https:\/\/www.google.com\/"</div>
<div>{'}'}</div>
      </div>
      </Col>
      </Row>
      </Col>
      </Row>
      
      <Row className="top-margin-sm">
        <Col xs={24} md={24} className="top-margin-sm" style={{marginBottom: "0px"}}>
        <h1 className="sub-heading">Try it yourself</h1>
        </Col>
      </Row>
      <Row className="bottom-margin-sm">
      <Col xs={0} md={2} xl={4}></Col>
        <Col xs={24} md={20} xl={16}>
          <Row>
      <Col xs={24} sm={24} md={24}>
        <h3 className="bottom-margin-sm align-left">API Request</h3>
        <div className="code-background">
              https://youtube.com
              <CopyToClipboard text={"https://youtube.com"} 
              onCopy={() => handleCopyText()}>
              <span  size="small" style={{float: "right", cursor: "pointer", color: "#0b3abe"}} > {currentText}</span>
              </CopyToClipboard>
              </div>
      </Col>

      <Col xs={24} sm={24} md={24}>

      </Col>

      <Col xs={24} sm={24} md={24} className="top-margin-sm">
      <div className="code-background">
      <div>
                Paste url here
              </div>
              <div>
              <Input style={{minHeight: "50px", fontSize: "20px"}} onChange={(e) => handleInputChange(e)}/>
              </div>
      </div>
      </Col>
      <Col xs={24} sm={24} md={24} className="top-margin-sm">
        <div className="code-background">
        {`{`}
              {Object.keys(parsedData).map(dat => (
                <div>
                {`"${dat}"`} : {`"${parsedData[dat]}"`}
                </div>
              
              ))}

            {`}`}
        </div>
      </Col>
      </Row>
      </Col>
      </Row>
      <Row>
        <Col span={24}>
      <iframe src="https://codesandbox.io/embed/react-new?fontsize=14&hidenavigation=1&theme=dark" style={{width: '100%', height: 500, border: 0, borderRadius: 4, overflow: 'hidden'}} title="React" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" />

        </Col>
      </Row>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Url-Previewer ©2021 Created by Jed</Footer>
  </Layout>
    )
}
