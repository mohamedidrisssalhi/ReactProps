import './PlayerCard.css';

const Player = ({ name, rating, pac, sho, pas, dri, def, phy, imageUrl }) => {
    return (
        <div className="vertical-card">
            <img className="player-image" src={imageUrl} alt={name} />
            <div className="player-info">
                <h2>{name}</h2>
                <p>Rating {rating}</p>
                <div className="divider"></div> 
                <div className="stats">
                    <div>PAC {pac}</div>
                    <div>SHO {sho}</div>
                    <div>PAS {pas}</div>
                    <div>DRI {dri}</div>
                    <div>DEF {def}</div>
                    <div>PHY {phy}</div>
                </div>
            </div>
        </div>
    );
};

export default Player;