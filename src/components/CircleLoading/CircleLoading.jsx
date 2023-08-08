import RandomText from "../RandomText/RandomText.jsx";
import './CircleLoading.modules.css'

export const CircleLoading = () => {
    return (
        <div className="circle">
            <div className="square"></div>
            <RandomText initialWord="xim@l3" time={50} />
            <RandomText initialWord="-r3@c+-+p()&" time={70} />
            <RandomText initialWord="+min@l-t4nk5-r3@c+" time={30} />
            <RandomText initialWord="<<=r3@c+ximn@l-t4nk5-" time={60} />
            <RandomText initialWord="ximt4nk5-@l3b-in@_r3@c-" time={40} />
            <RandomText initialWord="n@l-4nkl3b-+5-rxim@3@c+" time={70} />
            <RandomText initialWord="xim@l3b-+3t4nk5-r3@c+" time={80} />
            <RandomText initialWord="xim@l3@l-t4nk5-r3@c+" time={10} />
            <RandomText initialWord="im3b-+@l-t4nk5-r3+" time={90} />
            <RandomText initialWord="i@3b-3@l5r3c+" time={50} />
            <RandomText initialWord="3min@l-" time={30} />
        </div>
    )
 }