-- AlterTable
ALTER TABLE "Invoice" ALTER COLUMN "value_before_discount" DROP NOT NULL,
ALTER COLUMN "discount_amount" DROP NOT NULL,
ALTER COLUMN "net_amount" DROP NOT NULL,
ALTER COLUMN "vat_amount" DROP NOT NULL,
ALTER COLUMN "withholding_amount" DROP NOT NULL,
ALTER COLUMN "total_amount" DROP NOT NULL;
