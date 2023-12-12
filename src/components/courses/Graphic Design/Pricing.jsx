import React from 'react'
import Heading from '../../aboutus/Heading'

const Pricing = () => {
  return (
    <>
    <div className="container">
    <Heading content={"Pricing process"} left={"22.2vw"} />
    </div>
    <div style={{
        width:"100vw",
        display:"flex",
        height:"48.84vw",
        translate:"5% 0",
        marginTop:"11.1vw",
    }}>
        <div className="price-content">
            <h3 style={{
                color:"#FFF",
                fontFamily: "Inter",
                fontSize: "2.22vw",
                fontStyle: "normal",
                fontWeight: "700",
            }}>Payment</h3>
            <p style={{
                fontFamily: "Open Sans",
                fontSize: "1.887vw",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                margin:"2.22vw 3.33vw 1.11vw 0"
            }}>Ignite Your Learning Journey: Secure Your Seat!</p>
            <p>Unlock a World of Knowledge and Opportunity</p>
            <button
              type="button"
              className="button"
              id="button"
              style={{
                borderRadius: "0.8325vw",
                border: "0.104vw solid #B46BD1",
                marginRight: "1.11vw",
                padding: "1.1.11vw 1.734vw",
                fontWeight: "600",
                fontSize: "1.1544vw",
                fontFamily:"Raleway",
                lineHeight:"2.22vw",
                marginTop:"3.33vw",
              }}
            >
              View details
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 15" fill="none" style={{marginLeft:"0.66vw"}}>
  <path d="M1 7.5L17 7.5M17 7.5L11 13.5M17 7.5L11 1.5" stroke="#B46BD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
                <div style={{marginTop:"3.33vw"}}>
                <p style={{
                    color: "#F8E8FF",
                    fontFamily: "Open Sans",
                    fontSize: "1.11vw",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    marginBottom:"1.665vw",
                }}>What we will you provide</p>
            <div className="check" style={{display:"flex"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="206" viewBox="0 0 54 206" fill="none">
  <path d="M26.623 30.1945C25.8809 27.9979 16.5748 20.5311 22.2773 19.2761L26.9537 25.5268L48.454 3.97461L50.6164 6.14226L26.623 30.1945Z" fill="white"/>
  <path d="M26.623 103.481C25.8809 101.285 16.5748 93.8177 22.2773 92.5627L26.9537 98.8134L48.454 77.2612L50.6164 79.4289L26.623 103.481Z" fill="white"/>
  <path d="M26.623 177.815C25.8809 175.618 16.5748 168.151 22.2773 166.896L26.9537 173.147L48.454 151.595L50.6164 153.762L26.623 177.815Z" fill="white"/>
  <path d="M6.82494 117.717C10.4891 117.717 13.4595 114.74 13.4595 111.067C13.4595 107.394 10.4891 104.416 6.82494 104.416C3.1608 104.416 0.19043 107.394 0.19043 111.067C0.19043 114.74 3.1608 117.717 6.82494 117.717Z" fill="white"/>
  <path d="M6.82494 45.2252C10.4891 45.2252 13.4595 42.2476 13.4595 38.5745C13.4595 34.9014 10.4891 31.9238 6.82494 31.9238C3.1608 31.9238 0.19043 34.9014 0.19043 38.5745C0.19043 42.2476 3.1608 45.2252 6.82494 45.2252Z" fill="white"/>
  <path d="M10.1423 194.995C13.8065 194.995 16.7768 192.017 16.7768 188.344C16.7768 184.671 13.8065 181.693 10.1423 181.693C6.47819 181.693 3.50781 184.671 3.50781 188.344C3.50781 192.017 6.47819 194.995 10.1423 194.995Z" fill="white"/>
  <path d="M43.3796 187.724H10.207V153.806H32.7644V155.136H11.5339V186.394H42.0527V171.097H43.3796V187.724Z" fill="white"/>
  <path d="M43.3796 113.236H10.207V79.3179H32.7644V80.648H11.5339V111.906H42.0527V96.6097H43.3796V113.236Z" fill="white"/>
  <path d="M43.3796 37.4185H10.207V3.5H32.7644V4.83014H11.5339V36.0884H42.0527V20.7918H43.3796V37.4185Z" fill="white"/>
</svg>
            <div className="points" style={{
                color: "#FFF",
                fontFamily: "Open Sans",
                fontSize: "0.888vw",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                display:"grid",
                gridTemplateRows:"repeat(3,auto)",
                gap:"2.22vw",
                marginLeft:"0.777vw"
            }}>
                <p style={{paddingTop:"0.555vw"}}>Access to High-Quality Course Content</p>
                <p>Access to High-Quality Course Content</p>
                <p>Access to High-Quality Course Content</p>
            </div>
            </div>
                </div>
        </div>
        <div className="price-image"></div>
    </div>
    </>
  )
}

export default Pricing