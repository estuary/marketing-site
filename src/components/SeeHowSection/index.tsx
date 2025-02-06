import Container from '../Container';
import { container, buttonsWrapper } from './styles.module.less';

const SeeHow = ({ buttons }) => {
    return (
        <section>
            <Container isVertical className={container}>
                <h2>
                    Unlock the <span>full potential</span> of your data
                </h2>
                <div className={buttonsWrapper}>{buttons}</div>
            </Container>
        </section>
    );
};

export default SeeHow;
