import PropTypes from 'prop-types';
import {
  SectionStatistics,
  SectionTitle,
  SectionList,
  SectionItem,
  SectionItemLabel,
  SectionItemPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      {title && <SectionTitle>{title}</SectionTitle>}
      <SectionList>
        {stats.map(({ id, label, percentage }) => (
          <SectionItem key={id} type={label}>
            <SectionItemLabel>{label}</SectionItemLabel>
            <SectionItemPercentage>{percentage}%</SectionItemPercentage>
          </SectionItem>
        ))}
      </SectionList>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
