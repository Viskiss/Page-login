import { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";
import { Accordion, Button, Group, Avatar } from "@mantine/core";

const Header: FC = () => {
  const { store } = useContext(Context);

  return (
    <>
      <Accordion sx={{ maxWidth: 350 }} variant="filled" radius="md">
        <Accordion.Item value="customization">
          <Accordion.Control>
            <Avatar radius="xl" />
            User {store.user.email}
          </Accordion.Control>
          <Accordion.Panel>
            <Group position="right" mt="md">
              <Button onClick={() => store.logout()}>Exit</Button>
            </Group>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default observer(Header);
