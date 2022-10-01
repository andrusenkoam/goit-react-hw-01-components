import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  margin-bottom: 40px;
  border: 1px solid var(--color-gray);
  border-radius: 5px;
  background-color: var(--primary-bg-color);
`;

export const SectionTitle = styled.h2`
  padding: 30px 10px;
  color: var(--title-color);
  font-size: 40px;
  text-align: center;
`;

export const SectionList = styled.ul`
  display: flex;
`;

const setBgColor = props => {
  switch (props.type) {
    case '.docx':
      return 'rgb(82, 180, 230)';
    case '.pdf':
      return 'rgb(124, 78, 230)';
    case '.mp3':
      return 'rgb(255, 61, 61)';
    case '.psd':
      return 'rgb(60, 255, 239)';

    default:
      return 'yellow';
  }
};

export const SectionItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 5px;
  width: calc(100% / 4);
  background-color: ${setBgColor};
`;

export const SectionItemLabel = styled.span`
  margin-bottom: 10px;
  color: var(--color-white);
`;

export const SectionItemPercentage = styled.span`
  color: var(--color-white);
  font-size: 20px;
`;
