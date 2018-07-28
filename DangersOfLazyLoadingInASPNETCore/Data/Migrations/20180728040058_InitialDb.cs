using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DangersOfLazyLoadingInASPNETCore.Migrations
{
    public partial class InitialDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Address",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FullAddress = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Address", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "People",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    AddressId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_People", x => x.Id);
                    table.ForeignKey(
                        name: "FK_People_Address_AddressId",
                        column: x => x.AddressId,
                        principalTable: "Address",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Address",
                columns: new[] { "Id", "FullAddress" },
                values: new object[] { 1, "123 Main Street" });

            migrationBuilder.InsertData(
                table: "Address",
                columns: new[] { "Id", "FullAddress" },
                values: new object[] { 2, "124 Main Street" });

            migrationBuilder.InsertData(
                table: "Address",
                columns: new[] { "Id", "FullAddress" },
                values: new object[] { 3, "125 Main Street" });

            migrationBuilder.InsertData(
                table: "People",
                columns: new[] { "Id", "AddressId", "Name" },
                values: new object[] { 1, 1, "Shawn" });

            migrationBuilder.InsertData(
                table: "People",
                columns: new[] { "Id", "AddressId", "Name" },
                values: new object[] { 2, 2, "Tom" });

            migrationBuilder.InsertData(
                table: "People",
                columns: new[] { "Id", "AddressId", "Name" },
                values: new object[] { 3, 3, "Sally" });

            migrationBuilder.CreateIndex(
                name: "IX_People_AddressId",
                table: "People",
                column: "AddressId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "People");

            migrationBuilder.DropTable(
                name: "Address");
        }
    }
}
