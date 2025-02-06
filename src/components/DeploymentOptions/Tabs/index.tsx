import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';

const tabStyling = {
    'color': 'var(--blue)',
    'transition': 'var(--default-transition)',
    'opacity': '0.75',
    'textTransform': 'none',
    'borderBottom': '1px solid var(--violet300)',
    'width': '33.333%',
    '&:hover': { backgroundColor: '#ECEFFC' },
    '&:active': { backgroundColor: '#E3E8FB' },
    '&.Mui-selected': { fontWeight: '600', opacity: '1' },
};

const Tabs = ({ handleTabChange }) => (
    <TabList
        onChange={handleTabChange}
        aria-label="Scrollable deployment options tabs"
        variant="scrollable"
        scrollButtons={false}
    >
        <Tab
            label="Public Deployment"
            value="public"
            sx={tabStyling}
            disableRipple
        />
        <Tab
            label="Private Deployment"
            value="private"
            sx={tabStyling}
            disableRipple
        />
        <Tab
            label="Bring Your Own Cloud"
            value="byoc"
            sx={tabStyling}
            disableRipple
        />
    </TabList>
);

export default Tabs;
