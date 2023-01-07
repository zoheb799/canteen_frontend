import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../images/users/user1.jpg";
import user2 from "../../images/users/user2.jpg";
import user3 from "../../images/users/user3.jpg";
import user4 from "../../images/users/user4.jpg";
import user5 from "../../images/users/user5.jpg";



const tableData = [
  {
    avatar: user1,
    Name: "Hanna Gover",
    PhNumber: "hgover@gmail.com",
    DeliveryTime: "Flexy React",
    Address: "pending",
    OrderDetails: "35",
    OrderPrice: "95K",
  },
  {
    avatar: user2,
    Name: "Hanna Gover",
    PhNumber: "hgover@gmail.com",
    DeliveryTime: "Lading pro React",
    Address: "done",
    OrderDetails: "35",
    OrderPrice: "95K",
  },
  {
    avatar: user3,
    Name: "Hanna Gover",
    PhNumber: "hgover@gmail.com",
    DeliveryTime: "Elite React",
    Address: "holt",
    OrderDetails: "35",
    OrderPrice: "95K",
  },
  {
    avatar: user4,
    Name: "Hanna Gover",
    PhNumber: "hgover@gmail.com",
    DeliveryTime: "Flexy React",
    Address: "pending",
    OrderDetails: "35",
    OrderPrice: "95K",
  },
  {
    avatar: user5,
    Name: "Hanna Gover",
    PhNumber: "hgover@gmail.com",
    DeliveryTime: "Ample React",
    Address: "done",
    OrderDetails: "35",
    OrderPrice: "95K",
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <Table  method= "GET" className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>name</th>
                <th>PhNumber</th>

                <th>Delivery Time</th>
                <th>Adresss</th>
                <th>OrderDetails</th>
                <th>OrderPrice</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.Name}</h6>
                        <span className="text-muted">{tdata.PhNumber}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.DeliveryTime}</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{tdata.Address}</td>
                  <td>{tdata.OrderDetails}</td>
                  <td>{tdata.OrderPrice}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
