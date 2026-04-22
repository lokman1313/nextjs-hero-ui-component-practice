
import {Card, Link} from "@heroui/react";

const TaskCard = ({task}) => {
    const {title,description}=task;
    return (
  
    <Card className="">
      <Card.Header>
        <Card.Title>{title}!</Card.Title>
        <Card.Description className="text-white">
          {description}
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default TaskCard;