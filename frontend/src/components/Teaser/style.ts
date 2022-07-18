import styled from 'styled-components';

export const TeaserWrapper = styled.div<{ direction?: string; padding?: string }>`
  display: flex;
  width: 100%;
  padding: ${p => p.padding ?? p.theme.spacing(12.5, 0)};
  flex-direction: ${p => p.direction ?? 'row'};

  ${p => p.theme.breakpoints.down('lg')} {
    padding: ${p => p.padding ?? p.theme.spacing(5, 0)};
  }
  ${p => p.theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`;

export const TeaserItem = styled.div<{ isActive?: boolean }>`
  cursor: pointer;
  padding: ${p => p.theme.spacing(0, 0, 4.5, 0)};

  h2,
  p {
    color: ${p => (p.isActive ? `${p.theme.palette.common.black}` : `${p.theme.palette.grey[500]}`)};
    transition: color 0.7s ease-out;
  }
`;

export const TeaserItemHeading = styled.h2<{ isActive?: boolean }>`
  ${p => p.theme.font('h3_900')};
  border-bottom: ${p =>
    p.isActive ? `1.5px solid ${p.theme.palette.common.black}` : `1px solid ${p.theme.palette.grey[500]}`};
  padding-bottom: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(5)};

  ${p => p.theme.breakpoints.down('lg')} {
    ${p => p.theme.font('h4_900')};
    padding-bottom: ${p => p.theme.spacing(2.5)};
    margin-bottom: ${p => p.theme.spacing(2.5)};
  }
  ${p => p.theme.breakpoints.down('md')} {
    ${p => p.theme.font('h5_900')};
  }
`;

export const TeaserItemParagraph = styled.p`
  ${({ theme }) => theme.font('body3')};

  ${p => p.theme.breakpoints.down('lg')} {
    ${p => p.theme.font('body4')};
  }
  ${p => p.theme.breakpoints.down('md')} {
    ${p => p.theme.font('body6')};
  }
`;
