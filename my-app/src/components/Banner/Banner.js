import './Banner.scss'

const Banner = ({imgSrc}) => {
    // rendre dynamique ce composant Banner avec un map sur les subtitle en props
    return (
        <div className="banner">
            <section className="content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
            <img src={imgSrc} alt="banner background"/>
        </div>
    )
}

export default Banner
