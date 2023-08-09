import { professionalXp }  from '../../domain/professionalXp/index.js';
import './Resume.modules.css';
export const Resume = () => {
    return (
        <div className="container">
            {professionalXp.map(xp =>
                <div className="xp-line">
                    <span className="date">{xp.date}</span>
                    <p> - </p>
                    <p>{xp.name}</p>
                    {xp.where.length !== 0 &&<p> at </p>}
                    {xp.where && xp.where.map(xpw =>
                        <>
                            <a className="link" href={xpw.link} target='_blank'>@{xpw.name}</a>
                            {xp.where.indexOf(xpw) !== (xp.where.length - 1) && ', '}
                        </>
                    )}
                    <span className="contract">({xp.typeOfContract})</span>
                </div>
            )}
            <p>These experiences brought me some skills, type <span className="code">skills</span> to discover them 👇🏼</p>
        </div>
    )
};
