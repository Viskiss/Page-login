import { FC, useState } from "react";
import { observer } from "mobx-react-lite";

import { IUser } from "../../../models/IUser";
import UserService from "../../../services/UserService";
import {
  Avatar,
  Space,
  Box,
  Accordion,
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  Grid,
} from "@mantine/core";

const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Space pt={150} />
      <Box mt="200" sx={{ maxWidth: 700}} mx="auto">
        
        <Avatar.Group   spacing="sm">
          <Avatar  src="image.png" radius="xl" />
          <Avatar src="image.png" radius="xl" />
          <Avatar src="image.png" radius="xl" />
          <Avatar radius="xl">+?</Avatar>
        </Avatar.Group>
        <Space h={20} />
        <Accordion  onClick={getUsers} variant="filled" radius="md">
          <Accordion.Item value="Users">
            <Accordion.Control>Get Users</Accordion.Control>
            <Accordion.Panel>
              <Grid>
                {users.map((user) => (
                  <Grid.Col key={user.email} span={6}>
                    <Card
                      shadow="sm"
                      p="lg"
                      radius="md"
                      withBorder
                    >
                      <Card.Section>
                        <Image
                          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                          height={160}
                          alt="Norway"
                        />
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>{user.email}</Text>
                        <Badge color="blue" variant="light">
                          Online
                        </Badge>
                      </Group>

                      <Button
                        variant="light"
                        color="blue"
                        fullWidth
                        mt="md"
                        radius="md"
                      >
                        Message
                      </Button>
                    </Card>{" "}
                  </Grid.Col>
                ))}
              </Grid>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>
    </>
  );
};

export default observer(Users);
