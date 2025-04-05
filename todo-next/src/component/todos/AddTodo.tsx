import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";

const AddTodo = () => {
  return (
    <div>
      <Form>
        <div className="flex gap-2">
          <Input name="input" type="text" placeholder="Add todo here ..." />
          <Button type="submit" text="Add" bgColor="bg-blue-600" />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;
