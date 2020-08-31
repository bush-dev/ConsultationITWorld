using Microsoft.EntityFrameworkCore.Migrations;

namespace ConsultationITWorld.Migrations
{
    public partial class SmallChangesInOffer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Tiltle",
                table: "Offers");

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Offers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "Offers");

            migrationBuilder.AddColumn<string>(
                name: "Tiltle",
                table: "Offers",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
