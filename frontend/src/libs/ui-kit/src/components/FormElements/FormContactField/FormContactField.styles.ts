import styled from 'styled-components';

import { TextField as UiKitTextField } from '../../FormElements/TextField/TextField';

export const TextField = styled(UiKitTextField)`
  margin-bottom: ${p => p.theme.spacing(1)};
`;

export const SwitcherWrapper = styled.div`
  margin-bottom: ${p => p.theme.spacing(2)};
`;
