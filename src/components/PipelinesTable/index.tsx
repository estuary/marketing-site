import CheckmarkDefault from '../../svgs/checkmark.svg';
import CloseDefault from '../../svgs/close.svg';
import { container, checkmarkIcon, closeIcon } from './style.module.less';

const PipelinesTable = () => {
    return (
        <div className={container}>
            <table>
                <thead>
                    <tr>
                        <th />
                        <th>Estuary</th>
                        <th>Batch ELT/ETL</th>
                        <th>DIY Python</th>
                        <th>KAFKA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span>Price</span>
                        </td>
                        <td>
                            <span>$</span>
                        </td>
                        <td>
                            <span>$$-$$$$</span>
                        </td>
                        <td>
                            <span>$-$$$$</span>
                        </td>
                        <td>
                            <span>$-$$$$</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Speed</span>
                        </td>
                        <td>&#60;100ms</td>
                        <td>5min+</td>
                        <td>Varies</td>
                        <td>&#60;100ms</td>
                    </tr>
                    <tr>
                        <td>
                            <span>Ease</span>
                        </td>
                        <td>Analysts can manage</td>
                        <td>Analysts can manage</td>
                        <td>Data Engineer</td>
                        <td>Senior Data Engineer</td>
                    </tr>
                    <tr>
                        <td>
                            <span>Scale</span>
                        </td>
                        <td>
                            <CheckmarkDefault className={checkmarkIcon} />
                        </td>
                        <td>
                            <CloseDefault className={closeIcon} />
                        </td>
                        <td>
                            <CloseDefault className={closeIcon} />
                        </td>
                        <td>
                            <CheckmarkDefault className={checkmarkIcon} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PipelinesTable;
