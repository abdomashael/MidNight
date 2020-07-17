import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import CarosalMain from "./components/carosal_main/carosal_main";
import SectionItem from "./components/section_item/section_item";
import Section from "./components/section/section";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="blockDiv">
        <CarosalMain
          vipHidden={true}
          sessionHidden={false}
          sessionNo="1"
          mainInfo="فنان  ، فنان "
          description=" تخضع كانج ميراي لعملية تجميلية للحصول على الشكل الذي طالما
                  حلمت به، ولكن عندما تقع في حب دو كيانج سيوك الكاره للعمليات
                  التجميلية، تجد نفسها أمام تحد جديد."
          mainImgSrc="https://shahidstatic3.akamaized.net/mediaObject/slider/Ihsan/Thumbs-5/Sakoon_Jamila_Slider_Hero_New/original/Sakoon_Jamila_Slider_Hero_New.jpg?height=432&width=768&croppingPoint=&version=1&type=webp"
          thumbnailSrc="https://shahidstatic1.akamaized.net/mediaObject/New-Thumbs/Karim2020-22/Sakon-jamlia-logo/original/Sakon-jamlia-logo.png?height=&width=345&croppingPoint=mc&version=1&type=png"
        />
      </div>
      <div className="blockDiv">
        <Section />
        <Section />
        <Section />
        <Section />
      </div>

      <Footer/>
    </div>
  );
}

export default App;
