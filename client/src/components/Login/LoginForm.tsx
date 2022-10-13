import { FC, useContext, useState } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { TextInput, Button, Group, Box, Popover, Text } from "@mantine/core";
import { Space } from "@mantine/core";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);

  return (
    <>
      <Space h={200} />
      <Box mt="200" sx={{ maxWidth: 300 }} mx="auto">
        <TextInput
          withAsterisk
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <Space h="md" />

        <TextInput
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <Group position="right" mt="md">
          <Button onClick={() => store.login(email, password)}>LogIn</Button>
          <Button
            variant="outline"
            onClick={() => store.registration(email, password)}
          >
            SingIn
          </Button>
          <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <Button>Help with registration</Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Text size="sm">
                1. Use a test account Email: test@mail.ru, Password: 12346978{" "}
                <br />
                2. Register yourself
              </Text>
            </Popover.Dropdown>
          </Popover>
        </Group>
      </Box>
    </>
  );
};

export default observer(LoginForm);
