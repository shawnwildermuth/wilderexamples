using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HasDataRelatedEntity.Migrations
{
    public partial class Seeding : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "People",
                columns: new[] { "Id", "Birthdate", "Name" },
                values: new object[] { 1, new DateTime(1969, 4, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "Shawn Wildermuth" });

            migrationBuilder.InsertData(
                table: "People",
                columns: new[] { "Id", "Birthdate", "Name" },
                values: new object[] { 2, new DateTime(1975, 7, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "Julie Lerman" });

            migrationBuilder.InsertData(
                table: "Toy",
                columns: new[] { "Id", "Description", "Name", "OwnerId" },
                values: new object[] { 1, null, "Tonka Truck", 1 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "People",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Toy",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "People",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
