using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VirtoCommerce.XapiExample.Data.SqlServer.Migrations
{
    /// <inheritdoc />
    public partial class ExtendOrderEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(name: "RejectionReason", table: "CustomerOrder", maxLength: 128, nullable: true);
            migrationBuilder.AddColumn<string>(name: "Discriminator", table: "CustomerOrder", nullable: false, maxLength: 128, defaultValue: "ExtendedCustomerOrderEntity");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn("RejectionReason", "CustomerOrder");
            migrationBuilder.DropColumn("Discriminator", "CustomerOrder");
        }
    }
}
