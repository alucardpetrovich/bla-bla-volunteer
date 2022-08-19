import { Button } from '@mui/material';
import { Accordion, Card } from '@ui-kit';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { Spinner } from '../../../Layout/Layout';
import { Wrapper } from './Roles.styles';
import { useRoles } from './useRoles';

export const Roles: FC = () => {
  const { formatMessage } = useIntl();

  const { isLoading, handleUpdateUserSettings, isLoadingUpdateUserSettings, setSelectedId, list, selectedId } =
    useRoles();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Accordion
        defaultExpanded={true}
        title={formatMessage({
          defaultMessage: 'Ваша роль',
          description: 'Roles: your role',
        })}
      >
        {{
          content: (
            <Wrapper>
              {list.map(role => (
                <Card
                  selected={selectedId === role.id}
                  title={formatMessage(role.title)}
                  content={formatMessage(role.description)}
                  key={role.id}
                  onClick={() => setSelectedId(role.id)}
                />
              ))}
            </Wrapper>
          ),
          actions: (
            <Button
              type="button"
              variant="contained"
              color="info"
              disabled={isLoadingUpdateUserSettings}
              onClick={handleUpdateUserSettings}
            >
              {formatMessage({
                defaultMessage: 'Готово',
                description: 'Roles: send role button',
              })}
            </Button>
          ),
        }}
      </Accordion>
    </>
  );
};
