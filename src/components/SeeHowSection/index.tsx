import Container from '../Container';
import { buttonsWrapper, wrapper } from './styles.module.less';

const SeeHow = ({ buttons }) => {
    return (
        <section className={wrapper}>
            <Container isVertical>
                <h2>
                    <span>SEE HOW </span>
                    <span>ESTUARY CAN WORK FOR YOU AND YOUR DATA</span>
                </h2>
                <div className={buttonsWrapper}>{buttons}</div>
            </Container>
        </section>
    );
};

export default SeeHow;
