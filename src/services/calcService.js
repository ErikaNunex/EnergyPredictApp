export function calcNewDeviceCost({ bills, kwh, power, hoursPerDay }) {
  const avgBill = (bills[0] + bills[1] + bills[2]) / 3;

  const deviceKwhMonth = (power / 1000) * hoursPerDay * 30;
  const deviceCost = deviceKwhMonth * kwh;

  const estimatedBill = avgBill + deviceCost;

  return {
    avgBill: avgBill.toFixed(2),
    deviceCost: deviceCost.toFixed(2),
    estimatedBill: estimatedBill.toFixed(2),
  };
}
