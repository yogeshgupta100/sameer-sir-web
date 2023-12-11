import { useState, useEffect } from 'react'

const University = ({color , textCol}) => {
    const [university, setUniversity] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/universities?populate=*`);
                const data = await res.json();
                console.log(data.data);
                setUniversity(data.data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [])

  return (
    <div className="row" style={{
        background: color,
        color:textCol,
        maxWidth:"100%",
        minHeight:"28vw",
    }}>
        <div className="container1" style={{
            textAlign:"center"
        }}>
            <div className="heading" style={{
                paddingTop:"5.55vw",
                fontFamily:"Open Sans",
                fontStyle:"normal"
            }}>
                <p style={{
                    color: "#FFF",
                    fontWeight:"300",
                    fontSize:"1.23vw",
                    opacity:"0.8"
                }}>Our partners</p>
                <h2 style={{
                    fontSize:"2.78vw",
                    fontWeight:"700"
                }}>Our Collaborative Network</h2>
                <div className="para pt-2" style={{
                    fontWeight:"100",
                    opacity:"0.8",
                    fontSize:"0.99vw"
                }}>
                <p>Meet the Key Players Shaping Our Design Ecosystem</p>
                {/* <p> voluptas fuga pariatur? Iste eos ea ducimus sit?</p> */}
                </div>
            </div>
        </div>
        <div className="container2" style={{
            display:"flex",
            flexWrap:"wrap",
            flexDirection:"row",
            justifyContent:"space-evenly",
            textAlign:"center",
            paddingTop:"2.8vw",
            fontWeight:"800",
            fontSize:"1.67vw",
            paddingBottom:"1.7vw"
        }}>
            {
                university && university.map((uniEle) => (
                    <p style={{
                        fontFamily:"bebasneue",
                        fontStyle:"normal"
                    }}>
                        {/* <img src={`${import.meta.env.VITE_STRAPI_SERVER_URL}${brand?.attributes?.logo?.data?.attributes?.url}`} alt="" /> */}
                        {uniEle.attributes.name}
                    </p>
                ))
            }
        </div>
    </div>
  )
}

University.defaultProps = { 
    color: "rgba(1,160,179,0.1)",
    textCol:"linear-gradient(114.53deg, #35174E 2.06%, #724191 68.61%, #885EB2 110.31%, #6A3F8F 156.01%)"
}

export default University