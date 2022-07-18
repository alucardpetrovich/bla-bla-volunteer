import styled from 'styled-components';

export const HomeHeading = styled.h3`
  max-width: 522px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: ${p => p.theme.spacing(16)};
  ${p => p.theme.font('h3_900')};

  ${p => p.theme.breakpoints.down('lg')} {
    margin-right: ${p => p.theme.spacing(10)};
    ${p => p.theme.font('h3_900')};
    max-width: 322px;
  }
  ${p => p.theme.breakpoints.down('md')} {
    max-width: 422px;
  }
  ${p => p.theme.breakpoints.down('sm')} {
    max-width: 100%;
    margin-right: 0px;
    margin-bottom: ${p => p.theme.spacing(16)};
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${p => p.theme.spacing(12.5)};

  ${p => p.theme.breakpoints.down('sm')} {
    margin-top: ${p => p.theme.spacing(6.5)};
    flex-direction: column;
  }
`;

export const SectionTitle = styled.p`
  letter-spacing: 0em;
  text-align: left;
  ${p => p.theme.font('h3_900')};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${p => p.theme.spacing(16.5)};

  ${p => p.theme.breakpoints.down('lg')} {
    padding-bottom: ${p => p.theme.spacing(8.75)};
  }

  ${p => p.theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  background-size: 50%;
  transition: all 200ms 275ms ease-in-out;
  background-repeat: no-repeat;
  background-size: 160%;
  background-position: center center;

  :hover {
    cursor: pointer;
  }
  :first-child {
    width: 550px;
    height: 400px;
  }
  :last-child {
    background-size: 50%;
    width: 650px;
    height: 400px;
  }

  ${p => p.theme.breakpoints.down('lg')} {
    :first-child {
      width: 47%;
      height: 300px;
      margin-right: ${p => p.theme.spacing(3.75)};
    }
    :last-child {
      background-size: 50%;
      width: 48%;
      height: 300px;
    }
  }

  ${p => p.theme.breakpoints.down('sm')} {
    :first-child {
      width: 100%;
      height: 300px;
      margin-right: 0px;
      margin-bottom: 30px;
    }
    :last-child {
      background-size: 50%;
      width: 100%;
      height: 300px;
    }
  }
`;
