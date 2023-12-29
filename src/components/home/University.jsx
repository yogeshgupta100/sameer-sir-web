import { useState, useEffect } from 'react'

const University = ({color , textCol}) => {
    const [university, setUniversity] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/universities?populate=*`);
                const data = await res.json();
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
        maxWidth:"100vw",
        minHeight:"35vw",
    }}>
        <div className="container1" style={{
            textAlign:"center"
        }}>
            <div className="heading" style={{
                paddingTop:"5.55vw",
                fontFamily:"Open Sans",
                fontStyle:"normal"
            }}>
                <div style={{
                    fontSize:"clamp(1.2rem , 3vw , 2.4rem)",
                    fontWeight:"600",
                    color:"#fff"
                }}>Our Collaborative Network</div>
                <div className="para" style={{
                    fontWeight:"100",
                    opacity:"0.8",
                    fontSize:"clamp(0.8rem , 1.5vw , 1rem)",
                }}>
                Meet the Key Players Shaping Our Design Ecosystem
                </div>
            </div>
        </div>
        <div className="container2-counter" style={{
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
                    <span style={{
                        fontFamily:"bebasneue",
                        fontStyle:"normal"
                    }}>
                        {uniEle.attributes.name}
                    </span>
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