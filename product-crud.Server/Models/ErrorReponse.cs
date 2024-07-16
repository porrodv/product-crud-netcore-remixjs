namespace product_crud.Server.Models
{
    public class ErrorResponse
    {
        public string Status { get; set; }
        public int StatusCode { get; set; }
        public string Message { get; set; }

        public ErrorResponse(string status, int statusCode, string message)
        {
            Status = status;
            StatusCode = statusCode;
            Message = message;
        }
    }
}
