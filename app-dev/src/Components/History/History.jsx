import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import './History.css'
function RechargeHistoryTable() {
  const rechargeHistory = [
    {
      transactionId: "TX123456",
      timestamp: "2024-07-28 14:30:00",
      plan: "299",
      validity: "28 days",
      planExpiryDate: "2024-08-28",
    },
    {
      transactionId: "TX123457",
      timestamp: "2024-06-28 12:15:00",
      plan: "499 Entertainment plan",
      planExpiryDate: "2024-07-28",
      validity: "28 days"
    },
    {
      transactionId: "TX123458",
      timestamp: "2024-05-28 10:05:00",
      plan: "569",
      planExpiryDate: "2024-06-28",
      validity: "28 days"
    },
    {
      transactionId: "TX123459",
      timestamp: "2024-04-28 08:50:00",
      plan: "365 Netflix Entertainment",
      planExpiryDate: "2024-05-28",
      validity: "28 days"
    }
  ];

  return (
    <>
    <div className="title-container"><h1>Recharge History</h1></div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Timestamp</TableCell>
              <TableCell>Plan</TableCell>
              <TableCell>Plan Validity</TableCell>
              <TableCell>Plan Expiry Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rechargeHistory.map((recharge) => (
              <TableRow key={recharge.transactionId}>
                <TableCell>{recharge.transactionId}</TableCell>
                <TableCell>{recharge.timestamp}</TableCell>
                <TableCell>{recharge.plan}</TableCell>
                <TableCell>{recharge.validity}</TableCell>
                <TableCell>{recharge.planExpiryDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default RechargeHistoryTable;
