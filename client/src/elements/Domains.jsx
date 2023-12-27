import React, {useEffect} from 'react';

function Domains(props) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                console.log(entry)
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                }else{
                    entry.target.classList.remove('show');
                }
            })
        })

        const domain = document.querySelectorAll('.domain');
        domain.forEach((element)=> observer.observe(element))


    }, []);

    return (
        <div>
            <h2 className="domains dh3">Across all 3 Domains</h2>
            <div className="domains">
                <div className="domain">
                    <img src="https://www.multirecruit.com/wp-content/uploads/2022/05/web-development-1-1.png"/>
                    <h3>Web/App Dev</h3>
                </div>
                <div className="domain">
                    <img src="https://codementum.com/images/maker/aimlmaker.png"/>
                    <h3>AI/ML</h3>
                </div>
                <div className="domain">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/people-using-blockchain-services-5373984-4494857.png"/>
                    <h3><br></br>Blockchain</h3>
                </div>
            </div>
        </div>
    );
}

export default Domains;