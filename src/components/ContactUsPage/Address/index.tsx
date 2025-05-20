import BuildingIcon from '@mui/icons-material/Apartment';
import { estuaryAddress } from '../../../../shared';
import {
    container,
    iconWrapper,
    title,
    card,
    city,
    address,
} from './styles.module.less';

const Address = () => {
    const {
        streetAddress,
        addressLocality,
        addressRegion,
        postalCode,
        addressCountry,
    } = estuaryAddress;

    return (
        <section>
            <div className={container}>
                <div className={iconWrapper}>
                    <BuildingIcon htmlColor="var(--blue)" fontSize="large" />
                </div>
                <h2 className={title}>OUR OFFICE</h2>
                <div className={card}>
                    <h3 className={city}>{addressLocality}</h3>
                    <p className={address}>
                        {streetAddress}, {addressLocality}, {addressRegion},{' '}
                        {postalCode}, {addressCountry}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Address;
