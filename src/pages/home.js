import React, { useEffect, useState } from "react";
import CarosalMain from "../components/carosal_main/carosal_main";
// import SectionItem from "../components/section_item/section_item";
import Section from "../components/section/section";
import Footer from "../components/footer/footer";
import Axios from "axios";
import { ADD_HOME_SECTIONS } from "../redux/actions";
import { connect } from "react-redux";

function Home(props) {

  const [sectionsIDs,setSectionsIDs] = useState([])

  let fetchHome = async()=>{
    let response = await Axios.get(process.env.REACT_APP_API_URL + "/page/home")
    props.setSections(response.data.sections);

    console.log(response.data.sections);
    let ids = response.data.sections.map((_,idx)=>idx);
    setSectionsIDs(ids)

  }
  useEffect(()=>{
    fetchHome();
  },[])
  return (
    <div className="App">
      {/* <p>{process.env.API_URL}</p> */}
      <div className="blockDiv">
        <CarosalMain
        //   vipHidden={true}
        //   sessionHidden={false}
        //   sessionNo="1"
        //   mainInfo={process.env.REACT_APP_IMAGE_BASE_URL}
        //   description=" تخضع كانج ميراي لعملية تجميلية للحصول على الشكل الذي طالما
        //           حلمت به، ولكن عندما تقع في حب دو كيانج سيوك الكاره للعمليات
        //           التجميلية، تجد نفسها أمام تحد جديد."
        //   mainImgSrc="https://shahidstatic3.akamaized.net/mediaObject/slider/Ihsan/Thumbs-5/Sakoon_Jamila_Slider_Hero_New/original/Sakoon_Jamila_Slider_Hero_New.jpg?height=432&width=768&croppingPoint=&version=1&type=webp"
        //   thumbnailSrc="https://shahidstatic1.akamaized.net/mediaObject/New-Thumbs/Karim2020-22/Sakon-jamlia-logo/original/Sakon-jamlia-logo.png?height=&width=345&croppingPoint=mc&version=1&type=png"
        />
      </div>
      <div className="section">
        {sectionsIDs.length>0? sectionsIDs.map((idx) =><Section key={idx} sectionIdx={idx}></Section>) : ""}

        {/* <Section />
        <Section />
        <Section />
        <Section /> */}
        <Footer />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSections: (sections) =>
      dispatch({ type: ADD_HOME_SECTIONS, payload: { sections:sections } }),
  }     
};

export default connect(null, mapDispatchToProps)(Home);
