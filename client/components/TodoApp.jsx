import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useSelector, useDispatch } from "react-redux";
import { fetchTodo } from '@/store/index';

import { TodoList } from './TodoList';
import { TodoHeader } from './TodoHeader';

export const TodoApp = () => {
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <Flex w="full" justifyContent="center">
      <Box maxW={500} mt={12}>
        <TodoHeader />
        <TodoList todos={state} />
      </Box>
    </Flex>
  )
}
