import './FeaturesContainer.scss'

import FeatureCard from '../FeatureCard/FeatureCard'

const FeaturesContainer = () => {
    return (
        <section className="features-container">
            <h2 className="sr-only">Features</h2>
            <div className="features">
                <FeatureCard
                    icon="chat"
                    title="You are our #1 priority"
                    text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                />
                <FeatureCard
                    icon="money"
                    title="More savings means higher rates"
                    text="The more you save with us, the higher your interest rate will be!"
                />
                <FeatureCard
                    icon="security"
                    title="Security you can trust"
                    text="We use top of the line encryption to make sure your data and money is always safe."
                />
            </div>
        </section>
    )
}

export default FeaturesContainer
