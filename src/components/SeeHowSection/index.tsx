import Container from '../Container';
import { buttonsWrapper, wrapper } from './styles.module.less';

const SeeHow = ({ buttons }) => {
    return (
        <section className={wrapper}>
            <Container isVertical>
                <h2>
                    Unlock the <span>full potential</span> of your data
                </h2>
                <div className={buttonsWrapper}>{buttons}</div>
            </Container>
        </section>
    );
};

export default SeeHow;
