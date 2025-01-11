const RestaurentCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, sla:{slaString}} = resData.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src=
            {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo }</h4>
            <h4>{slaString }</h4>

        </div>
    )
}

export default RestaurentCard;