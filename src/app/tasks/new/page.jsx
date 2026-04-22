import { newTaskAction } from "@/lib/action";
import {
  Button,
  Input,
  Label,
  Modal,
  TextField,
  ListBox,
  Select,
} from "@heroui/react";
const page = () => {
    return (
        <div className="w-1/2 mx-auto">
             <form action={newTaskAction} className="flex flex-col gap-4">
                              <TextField className="w-full" name="title" type="text">
                                <Label>Title</Label>
                                <Input placeholder="Enter your task name" />
                              </TextField>
                              <TextField className="w-full" name="description" type="text">
                                <Label>Description</Label>
                                <Input placeholder="Type Your Description" />
                              </TextField>
            
                              <Select
                                name="priority"
                                className="w-[256px]"
                                placeholder="Select one"
                              >
                                <Label>Priority</Label>
                                <Select.Trigger>
                                  <Select.Value />
                                  <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                  <ListBox>
                                    <ListBox.Item id="low" textValue="Low">
                                      Low
                                      <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="medium" textValue="Medium">
                                      Medium
                                      <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="high" textValue="High">
                                      High
                                      <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                  </ListBox>
                                </Select.Popover>
                              </Select>
            
                              <Select
                                name="status"
                                className="w-[256px]"
                                placeholder="Select one"
                              >
                                <Label>Status</Label>
                                <Select.Trigger>
                                  <Select.Value />
                                  <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                  <ListBox>
                                    <ListBox.Item id="pending" textValue="Pending">
                                      Pending
                                      <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="in-progress" textValue="In-Progress">
                                      In-Progress
                                      <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="completed" textValue="Completed">
                                      Completed
                                      <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                  </ListBox>
                                </Select.Popover>
                              </Select>
            
                              <TextField className="w-full" name="dueDate">
                                <Label>Due Date</Label>
                                <Input placeholder="Your Due Date" />
                              </TextField>
                              <Modal.Footer>
                                <Button slot="close" variant="secondary">
                                  Cancel
                                </Button>
                                <Button type="submit">Add a Task</Button>
                              </Modal.Footer>
                            </form>
        </div>
    );
};

export default page;