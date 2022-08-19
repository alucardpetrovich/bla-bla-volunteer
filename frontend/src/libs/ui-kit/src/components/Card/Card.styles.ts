import styled, { css } from 'styled-components';

export const Title = styled.span`
  ${p => p.theme.font('h3_900')};
  margin-bottom: ${p => p.theme.spacing(2.5)};
`;

export const Divider = styled.span`
  width: 100%;
  height: 1px;
  background: ${p => p.theme.palette.grey['500']};
  margin-bottom: ${p => p.theme.spacing(2.5)};
  transition: all 0.3s;
`;

const cardCss = css`
  opacity: 1;
  color: ${p => p.theme.palette.common.black};

  ${Divider} {
    background: ${p => p.theme.palette.common.black};
  }
`;

export const CardButton = styled.button<{ selected: boolean }>`
  background: transparent;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  border: 1px solid ${p => p.theme.palette.grey['500']};
  color: ${p => p.theme.palette.grey['500']};
  ${p => p.theme.font('body5')};
  padding: ${p => p.theme.spacing(2.5)};

  ${p => p.selected && cardCss};

  ${p => p.theme.hover} {
    :hover {
      ${cardCss}
    }
  }
`;
