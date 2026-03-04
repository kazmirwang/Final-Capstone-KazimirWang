function AboutMe({name,title,blurb,img}) {
    return (
        <div className="mb-5 bg-amber-100 hover:bg-amber-200 columns-2">
            <h1>{name}</h1>
            <h2>{title}</h2>
            <p>{blurb}</p>
            <img src={img} alt="image" width="200px"/>
        </div>
    );
}

export default AboutMe;